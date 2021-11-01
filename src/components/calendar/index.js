import React from 'react';
import classnames from 'classnames';

import * as calendar from './calendar';

import {
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
} from './styled';
import './index.css';

export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });
        
        this.props.onChange(date);
    };



    stateSelect = {
		date: null
	};

	handleDateChange = date => this.setState({ date });
    // handleDateChange = selectedDate => this.setState({ selectedDate })

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        const { date } = this.state;
        // const { dateSelect } = this.stateSelect;
        

        return (
            <BlockCalendar>
                <Block>
                    <div className="calendar">
                        <CalendarHeader>
                            <CalendarButton onClick={this.handlePrevMonthButtonClick}>{'<'}</CalendarButton>
                            <div>
                                <CalendarSelect
                                    ref={element => this.monthSelect = element}
                                    value={this.month}
                                    onChange={this.handleSelectChange}
                                >
                                    {monthNames.map((name, index) =>
                                        <option key={name} value={index}>{name}</option>
                                    )}
                                </CalendarSelect>

                                <CalendarSelect
                                    ref={element => this.yearSelect = element}
                                    value={this.year}
                                    onChange={this.handleSelectChange}
                                >
                                    {years.map(year =>
                                        <option key={year} value={year}>{year}</option> 
                                    )}
                                </CalendarSelect>
                            </div>
                            <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                        </CalendarHeader>

                        <CalendarTable>
                            <thead>
                                <tr>
                                    {weekDayNames.map(name =>
                                        <CalendarTh key={name}>{name}</CalendarTh>    
                                    )}
                                </tr>
                            </thead>

                            <tbody>
                                {monthData.map((week, index) =>
                                    <tr key={index} className="week">
                                        {week.map((date, index) => date ?
                                            <td
                                                key={index}
                                                className={classnames('day', {
                                                    'today': calendar.areEqual(date, currentDate),
                                                    'selected': calendar.areEqual(date, selectedDate)
                                                })}
                                                onClick={() => this.handleDayClick(date)}
                                            >{date.getDate()}</td>
                                            :
                                            <td key={index} />
                                        )}
                                    </tr> 
                                )}
                            </tbody>
                        </CalendarTable>
                    </div>
                </Block>
                <ButtonsBlock>
                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>
                    {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}

                    <ButtonSubmit className='button__submit'>Submit</ButtonSubmit>
                </ButtonsBlock>
            </BlockCalendar>
        );
    }
}