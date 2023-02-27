import React from 'react'
import Image from 'next/image'
import IMGBIO from '/public/images/kennymodel3.jpg'

// styles
import styles from './Bio.module.scss'

const Bio = () => {
  return (
      <div className={styles.bio}>
      <h2>Kenneth Seremet</h2>
      <h4>aka &quot;Kenny Black&quot;</h4>
          <p>
       Sprung out of the funky, concrete cubicle ghetto suburban Stucktown, Kenny black Happened to be the right age to fully appreciate the new sounds that were starting to emerge at around 83. The sound of HIP HOP or Electro music. This new, fresh and distinctly urban culture was to change his life Starting out Breakin, he was to prove himself a true b-boy, and he soon became popular as a practitioner to be recon with. This hunt for skills, the very basic fabric of true hip-hop has been going on ever since. TV appearances, dance shows, teaching Breakin and battling soon gave way for Djing. 
        </p>
      <br />
      <Image src={IMGBIO} alt="tony portrait"
      />
              <br/>
      <p>
              1985 Kenny black stepped off the dance floor and in behind a pair of SHARP belt driven turntables and a mixer no one can remember the name of. This was his official intro into the music scene. This was his debut into entertaining people with music. A weekly radio show was also added to his youth resume! As age allowed more advanced maneuvers, he joined the other Stockholm djs hustling club gigs. Outgrowing his hometown scene was inevitable, and Mr. .K. Black tried his wings. He flew far too!, and finally decided to land and take a rest in Thailand. It turned out to be quite a rest at that! it lasted 4 years!! Perhaps someone out there, was at a tiny club in Pattaya back in 95-96, Called Eclipse, with the grooviest vibe, A still today famous and fondly remembered Special Punch and a DJ/Owner that played a set that you would remember. Then maybe you have partied with Kenny Black already. The Dj skills took him to quite a few places in Asia during this stay. A gig in Hong-Kongs red-light district being one of those especially memorable. Time came for Kenny to move again and he flew back to his former stomping grounds. Armed with a mass of contacts and a label he had acquired he set about starting a Business and a Record shop, Healing Effect. Specializing in underground music on vinyl. It was during this period that Kenny via his old friend Ski was to start yet another phase of development in his musical journey, his study of the possibilities of MIDI.  
              <br />
              <br />
          </p>
 <p>
<br/>
So there it was, the reformation of an old friendship and the formation of the base unit of the Concrete Soul Collective was brought about. Late 2004, Simon Hartley of Wild Planet fame teamed up with Kenny at the Funk Bunker. Their combined magic brought about the Future Instrumentals EP on Kenny’s own label, Finest Blend Recordings as well as a release on Digital Soul Records witch received great reviews around the planet. Some nine years have passed since. And true b-boy style, the search for the perfect beat is a constant activity!! May the funk be with us all.
          </p>
    </div>
  )
}

export default Bio