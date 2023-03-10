import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import Bio from '@/components/bio/Bio';
import Carousel from '@/components/carousel/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenny Black
        </title>
        <meta name='description' content='Official webpage of Dj Kenny Black' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.home}>
        <motion.div
          className={`${styles.overlay} ${styles.first}`}
          initial={{width: '100%',}}
          animate={{
            width: 0,
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={`${styles.overlay} ${styles.second}`}
          initial={{width: '100%',}}
          animate={{
            width: 0,
          }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={`${styles.overlay} ${styles.third}`}
          initial={{width: '100%',}}
          animate={{
            width: 0,
          }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
        ></motion.div>
        <Hero />
        <Carousel />
        <Bio />
      </main>
    </>
  );
}
