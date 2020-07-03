using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace WebApiProyectoLenguajes.Models
{
    public partial class ProgrammingLenguagesProyect_2020Context : DbContext
    {
        public ProgrammingLenguagesProyect_2020Context()
        {
        }

        public ProgrammingLenguagesProyect_2020Context(DbContextOptions<ProgrammingLenguagesProyect_2020Context> options)
            : base(options)
        {
        }

        public virtual DbSet<CommentNew> CommentNew { get; set; }
        public virtual DbSet<CommentNewUser> CommentNewUser { get; set; }
        public virtual DbSet<ImageFile> ImageFile { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CommentNew>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CreationUserId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.ModificationDate)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationUser).HasMaxLength(128);
            });

            modelBuilder.Entity<CommentNewUser>(entity =>
            {
                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.CreationDate)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.ModificationDate)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationUser).HasMaxLength(128);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.HasOne(d => d.CommentNew)
                    .WithMany(p => p.CommentNewUser)
                    .HasForeignKey(d => d.CommentNewId)
                    .HasConstraintName("CommentNewUser_CommentNewId");
            });

            modelBuilder.Entity<ImageFile>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreationDate)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CreationUser).HasMaxLength(128);

                entity.Property(e => e.Description)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ImageFileId).ValueGeneratedOnAdd();

                entity.Property(e => e.ModificationDate)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationUser).HasMaxLength(128);

                entity.Property(e => e.Url)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.CommentNew)
                    .WithMany()
                    .HasForeignKey(d => d.CommentNewId)
                    .HasConstraintName("FK_ImageFile_CommentNewId");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
