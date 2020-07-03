using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebApiProyectoLenguajes.Models;

namespace WebApiProyectoLenguajes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentNewUserController : ControllerBase
    {

        private readonly ProgrammingLenguagesProyect_2020Context _context;

        public CommentNewUserController(ProgrammingLenguagesProyect_2020Context context)
        {
            _context = context;
        }

        //GetAllCommentNewUser
        [Route("[action]")]
        [HttpGet]
        public IEnumerable<CommentNewUser> GetAllCommentNewUser()
        {

            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    return _context.CommentNewUser.ToList();
                }
                catch { throw; }
            }
        }

        //GetAllCommentNewUserActive
        [Route("[action]")]
        [HttpGet]
        public IActionResult GetAllCommentNewUserActive()
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var commentNewsUser = _context.CommentNewUser
                                    .FromSqlRaw("SelectCommentNewUserActive")
                                    .AsEnumerable();
                    if (commentNewsUser.Equals("[]"))
                    {
                        return NotFound();
                    }
                    return Ok(commentNewsUser);
                }
                catch { throw; }
            }
        }


        //PostCommentNew
        [Route("[action]")]
        [HttpPost]
        public ActionResult PostCommentNewUser(CommentNewUser commentNewUser)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("InsertUpdateCommentNewUser {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}",
                                commentNewUser.CommentNewUserId,
                                commentNewUser.CreationDate,
                                commentNewUser.CreationUser,
                                commentNewUser.ModificationDate,
                                commentNewUser.ModificationUser,
                                commentNewUser.Status,
                                commentNewUser.Content,
                                commentNewUser.CommentNewId,
                                "Insert");
                    if (result < 1)
                    {
                        return null;
                    }

                    return Ok(result);
                }
                catch { throw; }
            }
        }


        //DeleteCommentNewById
        [Route("[action]/{id}")]
        [HttpDelete]
        public ActionResult DeleteCommentNewUserById(int id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("DeleteCommentNewUserById {0}", id);
                    if (result < 1)
                    {
                        return null;
                    }

                    return Ok(result);
                }
                catch { throw; }
            }
        }


    }
}
