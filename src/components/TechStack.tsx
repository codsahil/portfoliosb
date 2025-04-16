
import { useState } from 'react';

// Tech stack categories and their icons
const techStack = {
  languages: [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  
  hosting: [
    { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
    { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    { name: "Render", icon: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/j8z02ssteea5dqpdu3sn" },
  ],
  
  frameworks: [
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "DaisyUI", icon: "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg" },
    { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },
    { name: "ESBuild", icon: "https://esbuild.github.io/favicon.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
    { name: "MUI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Next", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Nodemon", icon: "https://www.vectorlogo.zone/logos/nodemonio/nodemonio-icon.svg" },
    { name: "QT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Router", icon: "https://reactrouter.com/_brand/react-router-mark-color.svg" },
    { name: "React Query", icon: "https://raw.githubusercontent.com/TanStack/query/main/media/logo.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Tauri", icon: "https://raw.githubusercontent.com/tauri-apps/tauri/dev/app-icon.png" },
    { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
  ],
  
  databases: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  ],
  
  tools: [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Github Actions", icon: "https://raw.githubusercontent.com/github/explore/2c7e603b797535e5ad8b4beb575ab3b7354666e1/topics/actions/actions.png" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Babel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "CMake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" },
    { name: "ESLint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
    { name: "Gradle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" },
    { name: "FFmpeg", icon: "https://www.vectorlogo.zone/logos/ffmpeg/ffmpeg-icon.svg" },
    { name: "Prettier", icon: "https://prettier.io/icon.png" },
    { name: "Portfolio", icon: "https://cdn-icons-png.flaticon.com/512/1454/1454827.png" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "Tampermonkey", icon: "https://raw.githubusercontent.com/OpenUserJS/OpenUserJS.org/master/public/images/tampermonkey1.png" },
  ]
};

type TechCategory = 'languages' | 'hosting' | 'frameworks' | 'databases' | 'tools';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('languages');

  const categories = [
    { id: 'languages', label: 'Languages' },
    { id: 'hosting', label: 'Hosting' },
    { id: 'frameworks', label: 'Frameworks & Libraries' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section id="tech-stack" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading text-center gradient-text">Tech Stack</h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as TechCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack[activeCategory].map((tech) => (
            <div key={tech.name} className="tech-icon">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-10 h-10 mb-2"
              />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
