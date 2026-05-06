import { App as AppAntD, ConfigProvider, theme } from "antd"; // 1. Added 'theme' import
import HomePage from "./pages/home";

const App = () => {
    const customTheme = {
        // 2. Use theme.defaultAlgorithm instead of the string "light"
        algorithm: theme.defaultAlgorithm,
        token: {
            colorPrimary: "#F49400",
            // colorTextBase: "#585858",
            colorBgBase: "#fafafa",
            colorPrimaryBg: "#fff7e8",
            colorPrimaryBgHover: "#ffedd0",
            colorPrimaryBorder: "#ffcb7a",
            colorPrimaryBorderHover: "#ffb24d",
            colorPrimaryHover: "#f49400",
            colorPrimaryActive: "#d67b00",
            colorPrimaryText: "#f49400",
            colorPrimaryTextHover: "#ff8800",
            colorPrimaryTextActive: "#d67b00",
            // colorText: "rgba(88, 88, 88, 0.88)",
            // colorTextSecondary: "rgba(88, 88, 88, 0.65)",
            // colorTextTertiary: "rgba(88, 88, 88, 0.45)",
            // colorTextQuaternary: "rgba(88, 88, 88, 0.25)",
            // colorTextDisabled: "rgba(88, 88, 88, 0.25)",
            colorBgContainer: "#ffffff",
            colorBgElevated: "#ffffff",
            colorBgLayout: "#f5f5f5",
            colorBgSpotlight: "rgba(88, 88, 88, 0.85)",
            colorBgMask: "rgba(88, 88, 88, 0.45)",
            colorBorder: "#d9d9d9",
            colorBorderSecondary: "#f0f0f0",
            // borderRadius: 6,
            // borderRadiusXS: 2,
            // borderRadiusSM: 4,
            // borderRadiusLG: 8,
            // padding: 16,
            // paddingSM: 12,
            // paddingLG: 20,
            // margin: 16,
            // marginSM: 12,
            // marginLG: 20,
            boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.08)",
            boxShadowSecondary: "0 4px 10px 0 rgba(0, 0, 0, 0.12)",
        },
    };

    return (
        <ConfigProvider theme={customTheme}>
            <AppAntD>
                <HomePage />
            </AppAntD>
        </ConfigProvider>
    );
};

export default App;
