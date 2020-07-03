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
    public class CommentNewController : ControllerBase
    {

        private readonly ProgrammingLenguagesProyect_2020Context _context;

        public CommentNewController(ProgrammingLenguagesProyect_2020Context context)
        {
            _context = context;
        }

        //GetAllCommentNew
        [Route("[action]")]
        [HttpGet]
        public IEnumerable<CommentNew> GetAllCommentNew()
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    return _context.CommentNew.ToList();
                }
                catch { throw; }
            }
        }

        //Get All Comment New By User Id
        [Route("[action]/{Id}")]
        [HttpGet("{Id}")]
        public IActionResult GetAllCommentNewByUserId(string id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var commentNews = _context.CommentNew
                                    .FromSqlRaw("SelectCommentNewByUserId {0}", id)
                                    .AsEnumerable();
                    if (commentNews.Equals("[]"))
                    {
                        return NotFound();
                    }
                    return Ok(commentNews);
                }
                catch { throw; }
            }
        }

        //GetCommentNewById
        [Route("[action]")]
        [Route("[action]/{id}")]
        [HttpGet]
        public IActionResult GetCommentNewById(int id)
        {
            try
            {
                var commentNew = _context.CommentNew
                           .FromSqlRaw("SelectCommentNewById {0}", id)
                           .AsEnumerable().Single();

                if (commentNew == null)
                {
                    return NotFound();
                }

                return Ok(commentNew);
            }
            catch
            {
                throw;
            }
        }

        //PostCommentNew
        [Route("[action]")]
        [HttpPost]
        public ActionResult PostCommentNew(CommentNew commentNew)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var commentNewResult = _context.CommentNew
                                 .FromSqlRaw("InsertUpdateCommentNew {0}, {1}, {2}, {3}, {4}, {5}, {6}",
                                commentNew.CommentNewId,
                                commentNew.CreationUserId,
                                commentNew.Content,
                                commentNew.ModificationDate,
                                commentNew.ModificationUser,
                                commentNew.CreationDate,
                                "Insert")
                                 .AsEnumerable().Single();

                    if (commentNewResult == null)
                    {
                        return NotFound();
                    }

                    return Ok(commentNewResult);
                }
                catch { throw; }
            }
        }

        //PutCommentNew
        [Route("[action]")]
        [HttpPut]
        public ActionResult PutCommentNew(CommentNew commentNew)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("InsertUpdateCommentNew {0}, {1}, {2}, {3}, {4}, {5}, {6}",
                                commentNew.CommentNewId,
                                commentNew.CreationUserId,
                                commentNew.Content,
                                commentNew.ModificationDate,
                                commentNew.ModificationUser,
                                commentNew.CreationDate,
                                "Update");

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
        public ActionResult DeleteCommentNewById(int id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("DeleteCommentNewById {0}", id);
                    if (result < 1)
                    {
                        return null;
                    }

                    return Ok(result);
                }
                catch { throw; }
            }
        }

        //Delete CommentNew By UserId
        [Route("[action]/{id}")]
        [HttpDelete]
        public ActionResult DeleteCommentNewByUser(string id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("DeleteCommentNewByUserId {0}", id);
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
