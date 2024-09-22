class CityInfo extends React.Component {
    render() {
        return (
            <div className="city-info">
                <h1>Название города: Одесса</h1>
                <h2>Страна: Украина</h2>
                <p>Год основания: 1794</p>
                <h3>Достопримечательности:</h3>
                <ul>
                    <li>Потёмкинская лестница</li>
                    <li>Оперный театр</li>
                    <li>Дерибасовская улица</li>
                    <li>Аркадия</li>
                </ul>
                <div className="city-images">
                    <div>
                        <img src="./images/potemkin-stairs.jpg" alt="Потёмкинская лестница" />
                        <p>Потёмкинская лестница</p>
                    </div>
                    <div>
                        <img src="./images/opera-theatre.jpg" alt="Оперный театр" />
                        <p>Оперный театр</p>
                    </div>
                    <div>
                        <img src="./images/deribasovskaya.jpg" alt="Дерибасовская улица" />
                        <p>Дерибасовская улица</p>
                    </div>
                </div>
            </div>
        );
    }
}

const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(
    <React.StrictMode>
        <CityInfo />
    </React.StrictMode>
);
