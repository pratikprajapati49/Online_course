import './App.css';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="bg">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="Cards">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
}

export default App;
