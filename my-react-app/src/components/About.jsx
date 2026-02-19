import React from "react";
function About() {
  return (<div>
    {/*About section wrapper*/}
    <section id="about" className="w-full bg-white py-20">
      {/*Centered content container*/}
      <div className="max-w-4xl mx-auto px-6">
        {/*Section Heading*/}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

        {/*About Text Content*/}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            I'm a developer and designer who believes that great digital
            experiences come from the perfect blend of aesthetics and
            functionality. With a keen eye for detail and a passion for clean
            code, I create solutions that not only look beautiful but work
            seamlessly.
          </p>

          <p>
            My approach is simple: understand the problem, design with purpose,
            and build with precision. I specialize in creating responsive web
            applications that prioritize user experience and performance.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
export default About;
