import Image from "next/image";

type SkillProps = {
  name: string;
  subtitle?: string; // 👈 ADD THIS
  logo: string;
  level: number;
  learning?: boolean;
};


function StarRating({ level }: { level: number }) {
  return (
    <div className="flex justify-center gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= level ? "text-purple-400" : "text-gray-600"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  const skills: SkillProps[] = [
   
   {
      name: "CapCut",
      subtitle:     "(Mobile and PC)",
      logo: "/logos/capcut.png",
      level: 4.5,
    },

    {
    
      name: "Adobe Premiere Pro",
      logo: "/logos/premiere.png",
      level: 2.5,
      learning: true,
    },
    {
      name: "After Effects",
      logo: "/logos/aftereffects.png",
      level: 1,
      learning: true,
    },
    
    {
      name: "Photoshop",
      logo: "/logos/photoshop.png",
      level: 1.5,
      learning: true,
    },

    {
      name: "DaVinci Resolve",
      logo: "/logos/davinci.png",
      level: 1,
      learning: true,
    }
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Tools & Software
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="interactive bg-white/5 rounded-xl p-6 flex flex-col items-center text-center"
          >
            {/* LOGO */}
            <Image
              src={skill.logo}
              alt={skill.name}
              width={48}
              height={48}
            />

            {/* NAME */}
            <p className="mt-4 font-medium">{skill.name}</p>
            {skill.subtitle && (
                <p className="text-sm text-gray-400">{skill.subtitle}</p>
            )}

            {/* LEARNING TAG */}
            {skill.learning && (
              <p className="text-sm text-gray-400">(Learning)</p>
            )}

            {/* STARS */}
            <StarRating level={skill.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
