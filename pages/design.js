import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './design.module.css';

export default function Design() {
  const router = useRouter();
  const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
  
    const typeCharacter = () => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        setTimeout(typeCharacter, speed);
      }
      i++;
    };
  
    typeCharacter(); 
  
  }, [text, speed]);

  return displayText;
  };

  const title = useTypewriter('[ -Design Philosophy-]');

  return (
    <main className={style.main}>
      <article className={style.article}>
        
        <h1 className={style.title}>{title}</h1>
        <p className={style.paragraph}>
        Having navigated the choppy yet adventurous waters of software projects in both academic and professional settings, I have come to realize that the success of a software engineering project often hinges on its design philosophy. Usually, this philosophy is fixed from the get-go, offering limited flexibility. In all other cases, it is more adaptable, evolving over time, based on how users and team members interact with the project.
        </p>
        <p className={style.paragraph}>
        Writing code may seem like an easy process—after all, you just write the code, right? But when you throw in extensive design philosophies, it can feel like the main point of the process is to religiously follow the design philosophy instead of building something you care about. The reality is, that navigating the coding principles of a gazillion different frameworks can be downright intimidating. In this blog post, I’m going to attempt to demystify this complexity by introducing two groups of design philosophies that made my life easier: Large-Scale Programming Styles & Comprehensive Design Systems. Despite the apparent differences between various design philosophies, they are all ultimately aimed at improving the quality and efficiency of software development. Rather than viewing them as conflicting ideologies, it's more productive to see them as tools in a toolbox. By understanding and leveraging the strengths of each philosophy, I have learnt that I can create more rhobust and adaptable software solutions.
        </p>
      </article>

      <article className={style.article}>
        <h2 className={style.subtitle}>Large Scale Programming Styles: TDD, DDD, and other Alphabet Soups</h2>
        <p className={style.paragraph}>
        While taking COMP SCI 393- Software Development at Northwestern, I stumbled upon TDD from what can only be described as the veritable alphabet soup of priorities—enter the DDs. Being introduced to them via TDD, I am now familiar with more of the DD family from other classes and readings. These design philosophies cater to projects where a singular top priority reigns supreme, whether it's ensuring foolproof resilience to edge cases or prioritizing user-centricity. The essence of the end product's priority translates into a procedural priority for the development timeline, thus prompting the adoption of one of the esteemed- xDDs.
        </p>
        <h3 className={style.subsubtitle}>Test-Driven Development (TDD)</h3>
        <p className={style.paragraph}> Test-driven development (TDD) is a methodical approach focused on ensuring precise code behaviors. It starts with engineers drafting tests for expected behaviors before any coding begins, establishing clarity on application behavior and exact requirements upfront. Tests are added incrementally, followed by writing just enough application code to fulfill them. This iterative "red-green-refactor" cycle entails writing failing tests (red) and then writing code to make them pass (green), steadily refining the codebase while addressing edge cases and stress testing. I myself became a huge TDD enthusiast after taking CS 393 Software Development. The premise of the class was such that we were developing a highly complex board game incrementally over the quarter. Every new week we would add some functionalities to our implementation of the game, but before we did the implementation we would have to submit 10 testcases for the functionalities we were going to implement, and the professor would collate all the testcases from the class. Once we implemented the specifications, our implementation would have to pass all the 600 testcases that were submitted. And when I say this, trust me, I have had my fair share of being annoyed at someone because my implementation would pass all 599 tests but consistently fail 1. I would be lying if I said I really enjoyed that class while it was happening. However, retroactively, I can't think of a single different way where my code would have been guaranteed to be as accurate had it not been challenged by so many plausible scenarios before. That is precisely the guarantee that TDD gives your code, which in my opinion is rarely attainable by another design philosophy.</p>
        <h3 className={style.subsubtitle}>Data-Driven Design (DDD)</h3>
        <p className={style.paragraph}> Data-driven development (DDD) is a development approach where every decision that is taken is rationalized by supporting data points. This data can be in many different forms, but is usually synthesized into metrics such as OKRs (Objective and Key Results) and KPIs (Key performance Indicators). These are objective metrics designed to give insights about performance of code on the actual application, business value derived from the application, and indicate growth for short term and long term goals of the project. I actually really like data-driven development because the quantification of seemingly qualitative applications can give clear directions on what needs to be changed. However, sometimes inaccurate measure selection of quantification of more qualitative data can lead to inaccurate insights.</p>
        <h3 className={style.subsubtitle}>User-Driven Development (UDD)</h3>
        <p className={style.paragraph}> After taking COMP SCI 330: Human Computer Interaction, User-Driven Development (UDD) and I became fast friends. UDD, much like user-centered design’s overly attentive sibling, puts users in the driver’s seat. Since they’re the ones who’ll use the product every day, who better to judge its performance and quality? This approach makes sure users are deeply involved at every stage, ensuring their feedback is woven into the product’s very fabric. UDD is an iterative process, employing methods such as contextual inquiry, retrospective studies, prototype and usability testing, and ethnographic studies, all tailored to the project's needs. I genuinely do believe that user feedback is the best indicator of how the product was built- they are on the lookout for things that might be missed by the development team, and therefore an iterative, fail-fast approach is an optimal approach towards developing more creative products that don't really have highly technical and quantitaive pre-determiend specifications.</p>
      </article>

      <article className={style.article}>
        <h2 className={style.subtitle}>Comprehensive Systems</h2>
        <p className={style.paragraph}>
          Now that we've explored the various XDDs and their overarching methodologies, let's dive into some more structured frameworks that are widely adopted in the industry. Specifically, we'll take a closer look at Agile Software Development and Kanban.
        </p>
        <h3 className={style.subsubtitle}>Agile Software Development</h3>
        <p className={style.paragraph}> Agile Software Development is like the jazz of coding frameworks—it's all about improvisation within structure. This framework thrives on iterative development, allowing project specifications and the final product to evolve in real-time and thus, and thus I think is best paired with UDD. With its fast feedback loops and cyclical "sprints," Agile ensures rapid delivery, keeping things moving at a brisk pace. You might be familiar with Scrum, a subset of the Agile Methods. Personally, my professional experiences have all been in hyper-Agile environments. I've seen the benefits of everyone staying on the same page, identifying problems early, and promoting accountability in tight-knit teams. However, let's be honest- sometimes Agile meetings can feel like a calendar traffic jam, blocking precious coding time and rehashing what the team already knows. I have learnt that teams should regularly assess the value of their daily Scrums and sprint cycles, tweaking their Agile process as needed. I think it is important to remember that Agile's suggested cycle isn't a one-size-fits-all straitjacket—it's more of a guideline, meant to be adapted to fit the nuances of the team. </p>
        <h3 className={style.subsubtitle}>Kanban</h3>
        <p className={style.paragraph}>While I haven’t extensively used Kanban boards in my professional life, I did get up close and personal with them in my Human-Computer Interaction class. From what I understand, Kanban boards seem to be the social media of project management—they give you a snapshot of what's happening on the team, what’s in progress, upcoming tasks, and who's doing what. During one internship, we had a semi-active Kanban board. I call it "semi-active" because, while everyone occasionally posted updates, sometimes someone would ghost the board for a day or two. At that point, keeping the board updated felt more ceremonial than functional. Kanban boards can be great for catching up team members, especially when someone’s on PTO, but they should add structure without feeling like another chore. If updating the board starts to feel like a task in itself, then it's time to rethink its use, or it’s defeating the whole purpose!</p>
        <p className={style.paragraph}>Ultimately, I have realised that no one design philosophy is going to be perfect for a project. In fact, the team is going to have curate their own design philosophy by taking certain practices and principles from all of these different schools of though in order to be able to implement a design philosophy that works best for them as a team. </p>
      </article>


      <button className={style.button} onClick={() => router.push('/')}>Back to Home</button>
    </main>
  );
}
