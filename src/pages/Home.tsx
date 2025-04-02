import Card from '../components/UI/Card';
import Button from '../components/UI/Button'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Space Explorer</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the wonders of the universe</p>
        <Button>Start Exploring</Button>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-xl font-bold mb-4">Planets</h2>
          <p>Explore the planets in our solar system</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold mb-4">Galaxies</h2>
          <p>Discover distant galaxies and nebulae</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold mb-4">Space News</h2>
          <p>Stay updated with the latest space discoveries</p>
        </Card>
      </section>
    </div>
  );
};

export default Home;
