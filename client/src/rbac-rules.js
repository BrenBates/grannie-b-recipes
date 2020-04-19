// Static permissions are those permissions which don't need any data apart from the user role. 
// Dynamic permissions are permissions which need additional data to determine access. 
// Static permissions are helpful when, for example, you have to allow write access to writers and admins only. 
// Dynamic permissions are helpful when, for example, you have only to allow the writer who is the owner of a resource to edit that resource.

// Permissions are defined in the format of resource:action

const rules = {
    visitor: {
      static: ["posts:list", "home-page:visit"]
    },
    writer: {
      static: [
        "posts:list",
        "posts:create",
        "users:getSelf",
        "home-page:visit",
        "dashboard-page:visit"
      ],
      dynamic: {
        "posts:edit": ({userId, postOwnerId}) => {
          if (!userId || !postOwnerId) return false;
          return userId === postOwnerId;
        }
      }
    },
    admin: {
      static: [
        
        "home-page:visit",
        "home-page:edit",
        "recipes:edit",
        "blogs:edit",
        "dashboard-page:visit",
        "profile-page:visit"
      ]
    }
  };
  
  export default rules;