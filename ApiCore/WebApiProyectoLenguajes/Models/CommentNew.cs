using System;
using System.Collections.Generic;

namespace WebApiProyectoLenguajes.Models
{
    public partial class CommentNew
    {
        public CommentNew()
        {
            CommentNewUser = new HashSet<CommentNewUser>();
        }

        public int CommentNewId { get; set; }
        public string CreationUserId { get; set; }
        public string Content { get; set; }
        public string ModificationDate { get; set; }
        public string ModificationUser { get; set; }
        public string CreationDate { get; set; }

        public virtual ICollection<CommentNewUser> CommentNewUser { get; set; }
    }
}
