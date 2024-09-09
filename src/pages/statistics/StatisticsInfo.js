import Data from '../../data.json';
import PersonInfo from './PersonInfo';

export default function StatisticsInfo() {

    var pivot = false;

    const renderPeopleInfo = Data["statistics"].map((person, index) => {
        pivot = !pivot;
        const colors = pivot ? 'bg-color-orange text-white' : 'bg-white text-color-orange';
        const isLast = index === Data["statistics"].length - 1;

        return (
            <PersonInfo
                colors={colors}
                personName={person.personName}
                personImage={person.personImage}
                greenCards={person.greenCards}
                yellowCards={person.yellowCards}
                isLast={isLast}
            />
        );
    });

    return (
        <section id="statistics-info" className='my-5 py-5'>

            <div className='d-block d-lg-none' style={{ paddingTop: '110px' }}>
                {renderPeopleInfo}
            </div>

            <div className='d-none d-lg-block container' style={{ paddingTop: '110px' }}>
                {renderPeopleInfo}
            </div>

        </section>
    )
}