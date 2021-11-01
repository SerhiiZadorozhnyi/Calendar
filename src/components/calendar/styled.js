import styled from "styled-components";

const BlockCalendar = styled.div`
    width: calc(100% - 30%);
    margin: auto;
    border: 1px solid gray;
    padding: 20px;
    border-radius: 5px;
`;

const Block = styled.div`
    margin: auto;
    border: 1px solid gray;
    border-radius: 5px;
`;

const CalendarHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
    background-color: #EBEBEB;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CalendarButton = styled.button`
    margin: 0px;
    border-radius: 5px;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        border: 1px solid #0081ff;
        transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

const CalendarSelect = styled.select`
    margin: 0 4px;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        border: 1px solid #0081ff;
        transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

const CalendarTable = styled.table`
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    margin: auto;
    padding-top: 0px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
`;

const CalendarTh = styled.th`
    vertical-align: middle;
    text-align: center;
    height: 36px;
`;

const CalendarDay = styled.div`

`;

const ButtonsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    margin-top: 15px;
`;

const ButtonSubmit = styled.button`
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid #0081ff;
    }

    :active {
        transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: #0081ff;
        color: #fff;
    }
`;

export {
    BlockCalendar,
    Block,
    CalendarHeader,
    CalendarButton,
    CalendarSelect,
    CalendarTable,
    CalendarTh,
    CalendarDay,
    ButtonsBlock,
    ButtonSubmit
}