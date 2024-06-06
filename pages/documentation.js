import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './documentation.module.css';

export default function Documentation() {
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

  const title = useTypewriter('[ -Documentation-]');

  return (
    <main className={style.main}>
      <article className={style.article}>
        
        <h1 className={style.title}>{title}</h1>
        <p className={style.paragraph}>
        This topic resonates with every software engineer- every CS student or developer I’ve encountered has a tale of woe involving terrible documentation. While we all have some hilarious tales to share, it highlights a serious industry-wide issue: software engineers hate writing good documentation almost as much as they hate reading bad documentation. So, what’s the secret to ending this documentation debacle’s vicious cycle ?
        </p>
        <p className={style.paragraph}>Well, for starters, we need to turn software developers into better writers. This might require a systemic shake-up in academia, where computer science majors are nudged (or pushed) into taking writing courses to communicate their code more effectively. A shining example is the class I’m writing this blog post for: Communicating Computer Science at Northwestern University. Of course, this isn't a problem that can be solved overnight, and I’m not claiming it's a foolproof solution, but it’s worth mentioning while we're debunking documentation woes. As I gear up to graduate and dive into the industry, the one skill I wish I felt more prepared for is writing eloquently—because let's face it, writing a "for loop" is easy; writing about it is another story!</p>
      </article>

      <article className={style.article}>
        <h2 className={style.subtitle}>Problems of having bad documentation- why must we have good documentation ?</h2>
        <p className={style.paragraph}>First off, let’s not pretend that “good documentation” is some mythical holy grail we’re all questing for. We need to establish why good documentation is a must-have, not just a nice-to-have. Quality documentation for programming languages, libraries, applications, and APIs can drastically improve the efficiency of software engineers. It provides clarity and insight into the functionality of different parts of the codebase, and its value skyrockets as complexity increases. </p>
        <p className={style.paragraph}> On the communication front, it ensures that all team members are on the same page about implementation details. Without good documentation, you're left with a game of “telephone,” where information gets muddled and key details are lost in translation. Bad documentation—or worse, no documentation—leaves engineers squinting at cryptic code comments and guessing at the intentions of the original developer (who might have already left the company).</p>
        <p className={style.paragraph}> Moreover, good documentation makes troubleshooting and maintenance a breeze. When updating or refactoring the code, less time is spent trying to decipher what the code does because its nuances are already well-documented. Compare this to bad documentation, which turns every bug fix into a scavenger hunt where the map is written in a foreign language.</p>
        <p className={style.paragraph}> During team changes or reorgs, good documentation makes knowledge transfer about legacy systems smoother and lowers the ramp-up time for new engineers. Without it, onboarding new team members feels like throwing them into the deep end of a pool with no lifeguard in sight.</p>
        <p className={style.paragraph}> Good documentation also encourages more open-source contributions and makes libraries or applications more user-friendly, increasing their adoption. Bad documentation, on the other hand, can turn potential contributors away faster than you can say “readme.” It can also frustrate users to the point of abandoning your tool for one with clearer guidance. </p>
        
        <h2 className={style.subsubtitle}>What is GOOD documentation ?</h2>
        <p className={style.paragraph}> Now that we’re clear on why documentation is important, let’s focus on what makes documentation good good. I genuinely don’t think it requires a long, elaborate list of requirements. Contrary to popular belief, the essentials are quite straightforward: documentation has to be accurate, up-to-date, simply worded, consistent, and well-structured. Okay, that might be more adjectives than I anticipated, but they’re all interconnected and not as arbitrary per project as one might think. </p>
        <p className={style.paragraph}> For example, documentation is either accurate or it’s not—there’s nothing subjective about that. Similarly, documentation in the same language can be consistent or inconsistent. Requirements like being “simply worded” might be open to interpretation, but I see them as standard technical writing principles. Maybe avoid using adjectives longer than 10 letters and keep transitions simple, and you’re halfway there. </p>
        <p className={style.paragraph}> One additional thing I’ve struggled with, even when documentation ticks all the above boxes, is a lack of real-world examples. What transforms good documentation into great documentation is a solid set of examples. Examples make concepts tangible and can turn an abstract explanation into something concrete and usable. So, in a nutshell, accurate, up-to-date, simply worded, consistent, well-structured, and example-rich documentation is the golden ticket. </p>
      
        <h2 className={style.subsubtitle}>How to write and maintain GOOD documentation ?</h2>
        <p className={style.paragraph}> Above, I made it sound like writing good documentation is a walk in the park. Just tick off those requirements, right? In reality, the hardest part isn’t meeting the requirements; it’s staying persistent throughout the process. Programming is challenging enough, and we often let good documentation take a backseat, hoping our code will be clear enough to speak for itself. Spoiler alert: it won’t. Or we procrastinate on documentation, thinking refactoring will render our efforts useless. Here are three common mistakes I make and how to dodge them: </p>
        <h3 className={style.subsubtitle}>1. Making ambitious assumptions about what the audience might know:</h3>
        <p className={style.paragraph}>It’s easy to skip explaining the obvious because, after staring at the codebase for eons, you know it instinctively. But your audience doesn’t. They need every detail laid out in a simple and consistent way. Think of explaining your code to your past self before you became an all-knowing code wizard. Remember, no one else has been staring at your code as long as you have (and lucky them!).</p>
        <h3 className={style.subsubtitle}>2. Putting off writing documentation until the very end:</h3>
        <p className={style.paragraph}>I’m a big fan of test-driven development (TDD) because you start with a clear idea of how a function should behave. Writing documentation before the code itself can be easier because you focus on the function's behavior, not its implementation. This approach prevents poor, hurried documentation and offers clarity when building the feature. Plus, starting with documentation means you avoid biases since you haven’t yet become too familiar with the code. It’s like writing a plot summary before penning the novel—less messy, more clarity.</p>
        <h3 className={style.subsubtitle}>3. Not updating documentation regularly:</h3>
        <p className={style.paragraph}>Every behavioral update in the code should trigger an automatic documentation update. The number of times I’ve had to figure out how an updated function or library works because the documentation was outdated is staggering. Keeping documentation current saves future headaches and ensures everyone stays on the same page.</p>
        
      </article>
      <button className={style.button} onClick={() => router.push('/')}>Back to Home</button>
    </main>
  );
}
