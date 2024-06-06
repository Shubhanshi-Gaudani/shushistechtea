import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './ethic.module.css';

export default function Ethic() {
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

  const title = useTypewriter('[ -Embracing an Ethical Mindset As a New Grad SWE-]');

  return (
    <main className={style.main}>
      <article className={style.article}>
        
        <h1 className={style.title}>{title}</h1>
        <p className={style.paragraph}>
        I was really excited to be writing this blog post because this topic is very near and dear to my heart. I have recurringly thought about this topic after almost every single Computer Science class I have taken at Northwestern. In my COMP SCI 496 class, "Emerging Risks of Humans Interacting With Technology," we engaged in a fascinating activity where we imagined future technological landscapes. This exercise, combined with discussions across my courses, has led me to ponder the level of optimism I should hold for our tech-driven future. I often visualize a world with towering skyscrapers, enormous screens featuring AI personas, and fleets of drones—a vision straddling the line between utopia and dystopia, depending on one's perspective.
        </p>
        <p className={style.paragraph}>The greatest challenge in predicting the future isn't just considering technological advancements alone. It requires a comprehensive view that includes sociological, economic, political, and psychological factors. Honestly, I find it overwhelming to predict technological futures due to my limited understanding of these aforementioned domains as a computer scientist. This complexity creates a sense of being caught in a cyclical loop where technology both shapes and is shaped by these external influences. Attempting to analyze this interplay in a straightforward, causal manner feels almost impossible.</p>
        <p className={style.paragraph}>However, the more I think about it, the more I realize that if computer scientists aren't considering the implications of the technology they build, who else will? They are uniquely positioned to predict the risks and unintended consequences of new technologies. By "computer scientists," I mean everyone in the production pipeline, from new grad engineers to CEOs. Each role has a unique perspective and responsibility, whether it's the hands-on coding and problem-solving of engineers or the strategic oversight and decision-making of executives. Reflecting on the ethical and societal impacts of my own work shouldn’t be outsourced to ethicists or policymakers; it must be integrated into my daily software engineering routine and everyone involved in tech development’s too. This holistic approach ensures that we're not just creating technology for technology's sake but we are mindful of the effect it is having in creating the world that will exist tomorrow.</p>
        <p className={style.paragraph}>As a soon-to-be new-grad engineer in this wild and wacky economy, I can't help but ponder my approach to my future work. We all have our own priorities, and a generic overview of mine include striving for excellence in my contributions and code, soaking up wisdom from mentors and senior engineers, and, of course, owning up to any blunders I might make along the way. Not only is it the classic "try not to set the office on fire" kind of gig, but also thinking about how what I am making is going to be used from many different lenses. Stepping into the workforce, I know my main gig will be mastering the technical skills required for my role.  </p>
        <p className={style.paragraph}>To break it down into actionable points, one way to proactively embrace an ethical mindset is to ensure your code does exactly what you think it does. Now, I know this might trigger a collective groan from many engineers—I've definitely pulled the "I don’t know why it works, but I’m not going to touch it" trick more times than I’d like to admit. While that might have kept me afloat through a good chunk of my Computer Science coursework, I've realized that it’s a pretty unavailing approach in the industry.</p>
        <p className={style.paragraph}>Most software mishaps in history have stemmed from the software behaving differently than what the engineer intended. This could be due to anything from a race condition to an edge case or load stress-testing—situations that are all too plausible in the real world. Making our code as deterministic as possible (obviously there are applications where you definitely wouldn’t want your code to deterministic and I’m not talking about those situations; yes, random() I am looking at you), where we can make certain fulfilling guarantees about its behavior, can go miles. These guarantees can be both theoretical (mathematical proof) or practical (performance on testing). Overstating the capabilities of a piece of code or glossing over its limitations can lead to corporate losses and other unpleasant and unethical consequences.</p>
        <p className={style.paragraph}>Another practice I've embraced is taking more accountability for the code I write. This means asking senior leadership how my small contributions fit into the bigger picture and the larger pipeline. This helps contextualize the code better and anticipate potential areas where there could be data compromises or biases. Not seeing how your work relates to the end product can make it easy to feel detached from the final impact your code can have—even when you’re the one who wrote it. In the software realm it is so easy to forget how BIG of an impact you as an individual are having, and once in a while it is worth talking to the product managers and marketting professionals on the team to get a sense of how many people's devices your code is touching. </p>
        <p className={style.paragraph}>In the longer term, continuous learning and staying up-to-date with industry trends help gather more data points, better informing you about potential shortcomings in your code. For example, taking a Computer Security class wasn't a requirement for me during my undergrad or master's, but working on a security team during a sophomore year internship opened my eyes to how vulnerable systems can be to external attacks. One effective habit I developed was doing preliminary threat modeling to build robust software. I’m not suggesting putting on a full-time security engineer’s hat but rather collaborating with the team’s security experts or conducting risk assessments to preemptively address vulnerabilities.</p>
      </article>
      <button className={style.button} onClick={() => router.push('/')}>Back to Home</button>
    </main>
  );
}
