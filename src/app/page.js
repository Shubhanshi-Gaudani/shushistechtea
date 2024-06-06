import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shushi's Tech Tea</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/design">Design Philosophy</Link>
          </li>
          <li>
            <Link href="/ethic">Ethics</Link>
          </li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.description}>
        Hello! I'm currently finishing up my BS/MS in Computer Science at Northwestern University and an incoming new grad software engineer at Microsoft. I share thoughts/musings (occasionally rants) on software engineering in practice! </p>
      <p className={styles.description}> (Oh, and pardon my sporadic comma splices, my major only taught me how to put semicolons in the right place.) </p>
    </div>
  );
}
