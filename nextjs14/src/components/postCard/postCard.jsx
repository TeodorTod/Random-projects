import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
               {post.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt="image" fill className={styles.img} />
                </div>}
                <span className={styles.date}>01.01.2025</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.id}/`}>Read more</Link>
            </div>
        </div>
    )
}

export default PostCard