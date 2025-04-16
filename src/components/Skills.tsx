
import { Code, Server, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "React Native", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "API Development", level: 85 },
        { name: "JWT", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Postman", level: 85 },
        { name: "Render", level: 75 },
        { name: "Netlify", level: 82 },
        { name: "Heroku", level: 78 },
        { name: "Figma", level: 70 },
        { name: "Webpack", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "C/C++", level: 78 },
        { name: "PHP", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading text-center gradient-text">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-card border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
