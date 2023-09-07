import MainTabs from '../MainTabs/MainTabs';
import Purchases from '../Purchases/Purchases';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.app}>
      <MainTabs />
    </section>
  );
}

export default App;
