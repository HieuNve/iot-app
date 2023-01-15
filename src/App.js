import logo from './logo.svg';
import './App.css';
import {Col} from 'antd';
import ReactECharts from 'echarts-for-react';
import {
    BoxCompany, BoxHumidity,
    ButtonCustom,
    Cloud,
    Container,
    Divider,
    DivTextHeader, DivTextHumidity,
    Header,
    RowStyle,
    Temperature,
    TextHeader,
    TextLST,
    TextP05,
    TextTemperature,
    Wrapper,
} from './style';
import {Chart, Line} from "react-chartjs-2";
// import faker from 'faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import BoxTemperature from "./components/BoxTemperature";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


function App() {

    const dataTest = [
        {
            fac: "P05-2F TEST1",
            temperature: 23.5,
            humidity: 44.2,
        },
        {
            fac: "GZ-IT-P05-1F",
            temperature: 22.9,
            humidity: 51.2,
        },
    ]

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random() * 1000),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                color: "#ffffff"
            },
        ],
    };

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Cloud/>
                    <DivTextHeader>
                        <TextHeader>STHM</TextHeader>
                        <span>监测空气温度和湿度</span>
                    </DivTextHeader>
                </Header>
                <TextP05>P05-2F PACK1</TextP05>
                <Divider>___________________</Divider>
                <RowStyle>
                    <Col span={6}>
                        <ButtonCustom>Show MAP</ButtonCustom>
                    </Col>
                    <Col span={12}>
                        <Temperature>Temperature (°C)</Temperature>
                    </Col>
                    <Col span={6}>
                        <ButtonCustom>History</ButtonCustom>
                    </Col>
                </RowStyle>
                <TextLST>LSL/USL: 18 ~ 28</TextLST>
                <TextLST>LSL/USL: 19 ~ 27</TextLST>
                <TextTemperature>21.6</TextTemperature>
                <div style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Line data={data} options={options}/>
                </div>
                <Temperature>Humidity ( % )</Temperature>
                <TextLST>LSL/USL: 18 ~ 28</TextLST>
                <TextLST>LSL/USL: 19 ~ 27</TextLST>
                <BoxHumidity>
                    <div style={{width: "30%"}}/>
                    <DivTextHumidity>
                        <TextTemperature>53</TextTemperature>
                    </DivTextHumidity>
                    <div style={{width: "30%"}}>
                        <BoxCompany>
                            <TextLST>OWNER:</TextLST>
                            <TextLST>_______</TextLST>
                            <TextLST>IT: 30409</TextLST>
                            <TextLST>FAC: 30054</TextLST>
                        </BoxCompany>
                    </div>
                </BoxHumidity>
                <div style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Line data={data} options={options}/>
                </div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {
                        dataTest.map(item => (
                            <BoxTemperature
                                temperature={item.temperature}
                                humidity={item.humidity}
                                title={item.fac}/>
                        ))
                    }
                </div>
            </Wrapper>
        </Container>
    );
}

export default App;
