import styles from './singlePost.module.css';
import Image from 'next/image'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" fill alt=""/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          {/* <Image className={styles.avatar} src="/hero.png" fill alt=""/> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Pencho Penchev</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>06.09.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus iusto quisquam officiis a accusantium asperiores sapiente ipsam, ipsum ullam ipsa, laboriosam optio qui consequuntur rem! Voluptatum reiciendis voluptatibus maxime!
          Laborum praesentium tempora provident vitae quo dolorem fuga, similique veritatis accusamus magni repellat iusto in harum sequi facilis tenetur, cumque exercitationem consectetur eius nesciunt est alias cum! Asperiores, illo aliquid.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage