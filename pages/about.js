import next from 'next'
import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function About() {
    return (
        <div>
            <h1>
                About Me
            </h1>

            <p className={styles.extraGreen}>Hi I am Ammon and I make super cool software!</p>

            {/* load an image locally */}
            <Image 
                src='/hercules.jpeg'
                alt='logo'
                width={400}
                height={300}
                // layout='fill'
            />
            {/*  you can also use image tags */}

            <img 
                src='/hercules.jpeg'
                alt='buff guy'
                // if you do this one you don't have to have the height and width (or fill) defined
            />

            {/* load an image hosted on another domain */}
            <Image 
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}

            />
        </div>

    )
}