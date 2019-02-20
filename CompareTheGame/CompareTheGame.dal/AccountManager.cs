using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security.DataProtection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.dal
{
    public class AccountManager
    {
        private UserManager<IdentityUser> _userManager { get; set; }
        private UserManager<IdentityUser> GetUserManager()
        {
            if (_userManager == null)
            {
                var provider = new DpapiDataProtectionProvider("CompareTheGame");
                _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>());
                _userManager.UserTokenProvider = new DataProtectorTokenProvider<IdentityUser>(provider.Create("authorisation"));
            }
            return _userManager;
        }

        public string CreateUser(string username, string password)
        {
            var manager = GetUserManager();

            var newUser = new IdentityUser() { UserName = username };
            IdentityResult result = manager.Create(newUser, password);

            if (result.Succeeded)
            {
                return LoginUser(username, password);
            }

            return "";
        }

        public string LoginUser(string email, string password)
        {
            var retVal = "";
            var manager = GetUserManager();
            var user = manager.Find(email, password);
            return retVal;
        }
    }
}
