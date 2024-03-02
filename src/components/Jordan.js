import React from 'react';
import petra from './images/petra.jpg';
import wadiRum from './images/wadiRum.jpg';
import deadSea from './images/deadSea.JPG';
import Jerash from './images/Jerash.jpg';
import AmmanCitadel from './images/ammanCitadel.jpg';
import DanaBiosphereReserve from './images/DanaBiosphereReserve.jpg';
import Aqaba from './images/Aqaba.png';
import MountNebo from './images/MountNebo.jpg';
import BalqaAlSalt from './images/BalqaAl-Salt.png';

const JordanLandmarksPage = () => {
  const landmarks = [
    {
      name: 'Petra - The Rose City',
      description: 'Petra is undoubtedly Jordan\'s most famous archaeological site, known worldwide for its exquisite rock-cut architecture and ancient Nabatean city. Carved into the rose-red cliffs of southern Jordan, the Treasury (Al-Khazneh) stands as Petra\'s most iconic monument, with its intricate façade mesmerizing visitors.',
      image: petra,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Wadi Rum - The Valley of the Moon',
      description: 'Wadi Rum, with its vast desert landscapes and towering sandstone mountains, offers a surreal experience akin to being on another planet. Known for its association with Lawrence of Arabia, visitors can explore Wadi Rum\'s dramatic scenery by jeep tours, camel rides, or even camping under the stars.',
      image: wadiRum,
      bestTime: 'Year-round, avoid extreme heat in summer',
    },
    {
      name: 'The Dead Sea - Earth\'s Lowest Point',
      description: 'The Dead Sea, renowned for its buoyant waters and mineral-rich mud, is one of the world\'s saltiest bodies of water and the lowest point on Earth\'s surface. Visitors flock to the Dead Sea for therapeutic mud baths, floating effortlessly in its dense waters, and enjoying the breathtaking views of the surrounding landscapes.',
      image: deadSea,
      bestTime: 'Year-round, avoid extreme heat in summer',
    },
    {
      name: 'Jerash - The Pompeii of the East',
      description: 'Jerash is one of the best-preserved Greco-Roman cities in the world, often referred to as the "Pompeii of the East" for its remarkable preservation and grandeur. Explore the ancient ruins of Jerash, including the imposing Hadrian\'s Arch, the Oval Plaza, the Temple of Artemis, and the remarkably intact Hippodrome.',
      image: Jerash,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Amman Citadel - A Window to Jordan\'s Past',
      description: 'The Amman Citadel, situated atop Jebel al-Qala\'a hill, is a historical site spanning millennia, offering panoramic views of Jordan\'s capital city. Explore ancient ruins, including the Temple of Hercules, the Umayyad Palace, and the iconic Jordan Archaeological Museum, housing artifacts from various periods of Jordan\'s history.',
      image: AmmanCitadel,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Dana Biosphere Reserve - Nature\'s Sanctuary',
      description: 'The Dana Biosphere Reserve is a haven for biodiversity, encompassing rugged mountains, deep gorges, and diverse ecosystems, including woodlands, deserts, and wetlands. Outdoor enthusiasts can embark on hiking trails, birdwatching expeditions, and eco-tours, immersing themselves in Jordan\'s pristine natural landscapes and wildlife.',
      image: DanaBiosphereReserve,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Aqaba - Gateway to the Red Sea',
      description: 'Aqaba, Jordan\'s only coastal city, boasts stunning beaches, vibrant coral reefs, and crystal-clear waters teeming with marine life, making it a paradise for snorkelers and divers. Explore Aqaba\'s rich history at sites like the Aqaba Fort and enjoy water sports, leisurely cruises, and indulgent seaside dining along the picturesque coastline.',
      image: Aqaba,
      bestTime: 'Year-round, avoid extreme heat in summer',
    },
    {
      name: 'Mount Nebo - Biblical Landmark',
      description: 'Mount Nebo holds immense religious significance as the place where Moses is said to have viewed the Promised Land before his death, according to biblical tradition. Visitors can marvel at panoramic views of the Jordan Valley, the Dead Sea, and the distant hills of Jerusalem, reflecting on the profound spiritual heritage of this sacred site.',
      image: MountNebo,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Balqa Al-Salt Governorate',
      description: 'Balqa Al-Salt Governorate, located northwest of the capital Amman, is renowned for its historical significance and charming architecture. Explore the old town of Salt, with its Ottoman-era buildings and bustling souks, and visit landmarks like the Great Mosque and the Ottoman Governorate Palace.',
      image: BalqaAlSalt,
      bestTime: 'Spring and Autumn',
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Explore Jordan: Iconic Landmarks</h1>
      <div style={styles.landmarksList}>
        {landmarks.map((landmark, index) => (
          <div key={index} style={styles.landmark}>
            <img src={landmark.image} alt={landmark.name} style={styles.landmarkImage} />
            <div style={styles.landmarkDetails}>
              <h2 style={styles.landmarkTitle}>{landmark.name}</h2>
              <p style={styles.landmarkDescription}>{landmark.description}</p>
              <p style={styles.landmarkTime}>Best Time to Visit: {landmark.bestTime}</p>
            </div>
          </div>
        ))}
      </div>
      <footer style={styles.pageFooter}>
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default JordanLandmarksPage;

const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: '#2A3538', // Updated background color for the entire page
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#BEBEBE', // Updated font color for the page title
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  landmarksList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  landmark: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    background: '#3B494E', // Landmark background color remains unchanged
  },
  landmarkImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
  landmarkDetails: {
    padding: '20px',
  },
  landmarkTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#BEBEBE', // Updated font color for the landmark title
  },
  landmarkDescription: {
    color: '#BEBEBE',
    marginBottom: '15px',
    lineHeight: '1.5',
  },
  landmarkTime: {
    fontStyle: 'italic',
    color: '#888',
  },
  pageFooter: {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
  },
};
