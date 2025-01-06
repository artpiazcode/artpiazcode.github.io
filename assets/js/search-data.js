// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-learnings",
          title: "Learnings",
          description: "Publishing my scattered notes for future me!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learnings/index.html";
          },
        },{id: "nav-past-work",
          title: "Past Work",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-modernbert",
      
        title: "ModernBERT",
      
      description: "ModernBERT",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ModernBERT/";
        
      },
    },{id: "post-positionalembeddings",
      
        title: "Positionalembeddings",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/PositionalEmbeddings/";
        
      },
    },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arpitas", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%74%70%69%61%7A%63%6F%64%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
