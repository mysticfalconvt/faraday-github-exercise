import Link from 'next/link';
import styles from '../styles/cards.module.css'



export default function SingleRepoCard({ repo }) {


    return (
        <div className={styles.singleRepoCard} >
            <Link href={repo.html_url}>
                <div className="repo-card">
                    <div className={styles.title}>
                        <h3>{repo.name}</h3>
                    </div>
                    <div className={styles.description}>
                        <p>{repo.description}</p>
                        <p>Language: {repo.language}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
