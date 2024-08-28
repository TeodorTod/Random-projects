// "use client"
import PostUser from '@/components/postUser/postUser';
import styles from './singlePost.module.css';
import Image from 'next/image'
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

//fetch with an API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error('Something went wrong!')
//   };
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  
  // const post = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" fill alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
        {/* {post && <Suspense fallback={<div>Loading...</div>} >
            <PostUser userId={post.id} />
          </Suspense>} */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>06.09.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage