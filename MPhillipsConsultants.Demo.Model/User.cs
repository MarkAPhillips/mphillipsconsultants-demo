using System;

namespace MPhillipsConsultants.Demo.Model
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string IpAddress { get; set; }
        public DateTimeOffset LastModified { get; set; }
        public byte[] RowVersion { get; set; }
    }
}