using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiProyectoLenguajes.Models;

namespace WebApiProyectoLenguajes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageFileController : ControllerBase
    {
        private readonly ProgrammingLenguagesProyect_2020Context _context;

        public ImageFileController(ProgrammingLenguagesProyect_2020Context context)
        {
            _context = context;
        }

        //Get All ImageFile https://localhost:44355/api/imagefile/GetAllImageFile
        [Route("[action]")]
        [HttpGet]
        public IEnumerable<ImageFile> GetAllImageFile()
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    return _context.ImageFile.ToList();
                }
                catch { throw; }
            }
        }

        //Get All ImageFile By User Id
        [Route("[action]/{Id}")]
        [HttpGet("{Id}")]
        public IActionResult GetAllImageFileByUserId(string id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var imageFiles = _context.ImageFile
                                    .FromSqlRaw("SelectFileImageByUserId {0}", id)
                                    .AsEnumerable();
                    if (imageFiles.Equals("[]"))
                    {
                        return NotFound();
                    }
                    return Ok(imageFiles);
                }
                catch { throw; }
            }
        }

        //Get All ImageFile By CommenNewId
        [Route("[action]/{Id}")]
        [HttpGet("{Id}")]
        public IActionResult GetAllImageFileByCommenNewId(int id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var imageFiles = _context.ImageFile
                                    .FromSqlRaw("SelectImageFileByCommenNewId {0}", id)
                                    .AsEnumerable();
                    if (imageFiles.Equals("[]"))
                    {
                        return NotFound();
                    }
                    return Ok(imageFiles);
                }
                catch { throw; }
            }
        }

        //GetImageFileById
        [Route("[action]")]
        [Route("[action]/{id}")]
        [HttpGet]
        public IActionResult GetImageFileById(int id)
        {
            try
            {
                var imageFile = _context.ImageFile
                           .FromSqlRaw("SelectFileImageById {0}", id)
                           .AsEnumerable().Single();

                if (imageFile.Equals("[]"))
                {
                    return NotFound();
                }

                return Ok(imageFile);
            }
            catch
            {
                throw;
            }
        }

        //Post ImageFile
        [Route("[action]")]
        [HttpPost]
        public ActionResult PostImageFile(ImageFile imageFile)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("InsertUpdateImageFile {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}",
                                imageFile.ImageFileId,
                                imageFile.Url,
                                imageFile.Description,
                                imageFile.CommentNewId,
                                imageFile.ModificationDate,
                                imageFile.ModificationUser,
                                imageFile.CreationDate,
                                imageFile.CreationUser,
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

        //Put ImageFile
        [Route("[action]")]
        [HttpPut]
        public ActionResult PutImageFile(ImageFile imageFile)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("InsertUpdateImageFile {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}",
                                imageFile.ImageFileId,
                                imageFile.Url,
                                imageFile.Description,
                                imageFile.CommentNewId,
                                imageFile.ModificationDate,
                                imageFile.ModificationUser,
                                imageFile.CreationDate,
                                imageFile.CreationUser,
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

        //Delete ImageFile ById
        [Route("[action]/{id}")]
        [HttpDelete]
        public ActionResult DeleteImageFileById(int id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("DeleteImageFileById {0}", id);
                    if (result < 1)
                    {
                        return null;
                    }

                    return Ok(result);
                }
                catch { throw; }
            }
        }

        //Delete ImageFile By UserId
        [Route("[action]/{id}")]
        [HttpDelete]
        public ActionResult DeleteImageFileByCommentNewId(string id)
        {
            using (var context = new ProgrammingLenguagesProyect_2020Context())
            {
                try
                {
                    var result = _context.Database.ExecuteSqlRaw("DeleteImageFileByCommentNewId {0}", id);
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