import SingleRepoCard from "./SingleRepoCard"
import styles from '../styles/cards.module.css'


// display all repos as cards
export default function DisplayRepos({ reposToDisplay }) {

    return (
        <div className={styles.repoCardContainer}>
            {reposToDisplay.map(repo => <div key={repo.id} >
                <SingleRepoCard repo={repo} />
            </div>)
            }
        </div >
    )
}

