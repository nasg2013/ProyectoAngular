using System;
using System.Collections.Generic;

namespace WebApiProyectoLenguajes.Models
{
    public partial class CommentNewUser
    {
        public int CommentNewUserId { get; set; }
        public string CreationDate { get; set; }
        public string CreationUser { get; set; }
        public string ModificationDate { get; set; }
        public string ModificationUser { get; set; }
        public string Status { get; set; }
        public string Content { get; set; }
        public int? CommentNewId { get; set; }

        public virtual CommentNew CommentNew { get; set; }
    }
}
