using System;
using System.Collections.Generic;

namespace WebApiProyectoLenguajes.Models
{
    public partial class ImageFile
    {
        public int ImageFileId { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public int? CommentNewId { get; set; }
        public string ModificationDate { get; set; }
        public string CreationDate { get; set; }
        public string CreationUser { get; set; }
        public string ModificationUser { get; set; }

        public virtual CommentNew CommentNew { get; set; }
    }
}
