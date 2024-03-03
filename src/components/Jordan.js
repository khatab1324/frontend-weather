import React from 'react';
import petra from './images/petra.jpg';
import wadiRum from './images/wadiRum.jpg';
import deadSea from './images/deadSea.JPG';
import Jerash from './images/Jerash.jpg';
import AmmanCitadel from './images/ammanCitadel.jpg';
import DanaBiosphereReserve from './images/DanaBiosphereReserve.jpg';
import Aqaba from './images/Aqaba.jpeg';
import MountNebo from './images/MountNebo.jpg';
import BalqaAlSalt from './images/BalqaAl-Salt.webp';
import AjlounCastle from './images/AjlounCastle.jpg';
import KarakCastle from './images/KarakCastle.jpg';
import ShobakCastle from './images/ShobakCastle.jpg';
import RomanAmphitheater from './images/RomanAmphitheater.jpg';
import AlMujibReserve from './images/AlMujibReserve.jpg';
import AzraqWetlandReserve from './images/AzraqWetlandReserve.webp';

const JordanLandmarksPage = () => {
  const landmarks = [
    {
      name: 'Petra - The Rose City',
      description: 'Explore the ancient city of Petra, a UNESCO World Heritage Site famous for its magnificent rock-cut architecture. Marvel at the intricate details of the Treasury (Al-Khazneh) and immerse yourself in the rich history of the Nabateans.',
      image: petra,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Wadi Rum - The Valley of the Moon',
      description: 'Experience the surreal beauty of Wadi Rum, known for its vast desert landscapes and towering sandstone mountains. Embark on jeep tours, camel rides, or camping adventures under the starry desert sky.',
      image: wadiRum,
      bestTime: 'Year-round (Avoid extreme heat in summer)',
    },
    {
      name: 'The Dead Sea - Earth\'s Lowest Point',
      description: 'Relax and rejuvenate at the Dead Sea, renowned for its mineral-rich waters and therapeutic mud. Float effortlessly in the buoyant sea and enjoy breathtaking views of the surrounding landscapes.',
      image: deadSea,
      bestTime: 'Year-round (Avoid extreme heat in summer)',
    },
    {
      name: 'Ajloun Castle',
      description: 'Step back in time at Ajloun Castle, a 12th-century fortress built by the Ayyubids. Enjoy panoramic views of the Jordanian countryside and explore the well-preserved architecture of this historic site.',
      image: AjlounCastle,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Karak Castle',
      description: 'Discover the history of Karak Castle, a strategic fortress dating back to the 12th century. Explore its labyrinthine passageways and learn about its role in the Crusades.',
      image: KarakCastle,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Shobak Castle',
      description: 'Explore Shobak Castle, a Crusader fortress built in the early 12th century by King Baldwin I of Jerusalem. Imagine life in medieval times as you admire the imposing walls and towers of this historic landmark.',
      image: ShobakCastle,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Jerash - The Pompeii of the East',
      description: 'Step back in time at Jerash, one of the best-preserved Greco-Roman cities in the world. Explore its ancient ruins, including the impressive Hadrian\'s Arch and the remarkably intact Hippodrome.',
      image: Jerash,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Amman Citadel - A Window to Jordan\'s Past',
      description: 'Visit the Amman Citadel, a historical site offering panoramic views of Jordan\'s capital. Explore ancient ruins, including the Temple of Hercules and the Umayyad Palace, and delve into Jordan\'s rich archaeological heritage.',
      image: AmmanCitadel,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Roman Amphitheater - Amman',
      description: 'Experience the history of Amman at the Roman Amphitheater, built during the reign of Emperor Antoninus Pius. Attend cultural events and concerts at this iconic landmark, once host to gladiatorial contests and theatrical performances.',
      image: RomanAmphitheater,
      bestTime: 'Year-round',
    },
    {
      name: 'Dana Biosphere Reserve - Nature\'s Sanctuary',
      description: 'Immerse yourself in the pristine landscapes of the Dana Biosphere Reserve, home to diverse ecosystems and wildlife. Explore hiking trails, embark on birdwatching expeditions, and discover the beauty of Jordan\'s wilderness.',
      image: DanaBiosphereReserve,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Al Mujib Nature Reserve',
      description: 'Explore the rugged beauty of Al Mujib Nature Reserve, a canyon complex in the Dead Sea region. Hike through dramatic cliffs, swim in refreshing pools, and encounter diverse wildlife in this natural oasis.',
      image: AlMujibReserve,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Azraq Wetland Reserve',
      description: 'Discover the biodiversity of Azraq Wetland Reserve, an oasis in the heart of the Eastern Desert. Explore natural springs, marshes, and seasonal lakes, and observe migratory birds in their natural habitat.',
      image: AzraqWetlandReserve,
      bestTime: 'Year-round',
    },
    {
      name: 'Aqaba - Gateway to the Red Sea',
      description: 'Relax on the stunning beaches of Aqaba and explore vibrant coral reefs teeming with marine life. Dive into crystal-clear waters, visit historical sites like the Aqaba Fort, and indulge in seaside dining along the picturesque coastline.',
      image: Aqaba,
      bestTime: 'Year-round (Avoid extreme heat in summer)',
    },
    {
      name: 'Balqa Al-Salt Governorate',
      description: 'Explore the historical significance and charming architecture of Balqa Al-Salt Governorate. Wander through the old town of Salt, with its Ottoman-era buildings and bustling souks, and visit landmarks like the Great Mosque and Governorate Palace.',
      image: BalqaAlSalt,
      bestTime: 'Spring and Autumn',
    },
    {
      name: 'Mount Nebo - Biblical Landmark',
      description: 'Visit Mount Nebo, a biblical landmark where Moses is said to have viewed the Promised Land. Marvel at panoramic views of the Jordan Valley, the Dead Sea, and the distant hills of Jerusalem, and reflect on the spiritual heritage of this sacred site.',
      image: MountNebo,
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
