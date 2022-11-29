import next from 'next'
import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function About() {
    return (
        <div>
            <h1>
                Ammon Orgill
            </h1>

            <p className={styles.extraGreen}>
                My name is Ammon Orgill and I'm a newly minted software engineer!
        I love to build intuitive websties that people love to use. I have a passion for creating and building. 
        I have years of corporate experience in Business Strategy & Operations which allowed me to develop in depth business acumen and a sharp eye for executing strategic initiaitves. I bring those skills to the table to ensure that products I create meet key business objectives. 

        I am a passionate real estate investor, concert pianist, and competitive pickleball player. 
      </p>

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