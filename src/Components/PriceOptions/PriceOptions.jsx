
import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {


    const priceOption = [
            {
                "id": 1,
                "optionName": "Basic Membership",
                "price": 29.99,
                "features": [
                    "Access to gym facilities",
                    "Use of locker rooms",
                    "Basic fitness classes",
                    "Personal trainer consultation (one session)",
                    "Access to group workout sessions"
                ]
            },
            {
                "id": 2,
                "optionName": "Standard Membership",
                "price": 49.99,
                "features": [
                    "Access to gym facilities",
                    "Use of locker rooms",
                    "Unlimited fitness classes",
                    "Personal trainer consultation (three sessions)",
                    "Nutrition guidance",
                    "Access to online workout programs"
                ]
            },
            {
                "id": 3,
                "optionName": "Premium Membership",
                "price": 79.99,
                "features": [
                    "Access to gym facilities",
                    "Use of locker rooms",
                    "Unlimited fitness classes",
                    "Unlimited personal training sessions",
                    "Nutrition guidance",
                    "Access to sauna and steam room",
                    "Priority booking for classes",
                    "Free access to special workshops and events"
                ]
            },
            {
                "id": 4,
                "optionName": "Family Membership",
                "price": 99.99,
                "features": [
                    "Access for two adults and two children",
                    "Use of locker rooms",
                    "Unlimited fitness classes for all members",
                    "Personal trainer consultation (two sessions per adult)",
                    "Access to kids' fitness classes",
                    "Family workout sessions on weekends"
                ]
            },
            {
                "id": 5,
                "optionName": "Student Membership",
                "price": 19.99,
                "features": [
                    "Access to gym facilities",
                    "Use of locker rooms",
                    "Discounted fitness classes",
                    "One personal trainer consultation",
                    "Access to study and lounge area"
                ]
            },
            {
                "id": 6,
                "optionName": "Corporate Membership",
                "price": 149.99,
                "features": [
                    "Access for up to 10 employees",
                    "Use of locker rooms",
                    "Unlimited fitness classes for all members",
                    "Wellness seminars and workshops",
                    "Health assessment and fitness tracking"
                ]
            },
            {
                "id": 7,
                "optionName": "Senior Membership",
                "price": 24.99,
                "features": [
                    "Access to gym facilities",
                    "Use of locker rooms",
                    "Low-impact fitness classes",
                    "One personal trainer consultation",
                    "Access to senior wellness programs"
                ]
            },
            {
                "id": 8,
                "optionName": "Month-to-Month Membership",
                "price": 59.99,
                "features": [
                    "No long-term commitment",
                    "Access to gym facilities",
                    "Use of locker rooms",
                    "Unlimited fitness classes",
                    "One personal trainer consultation"
                ]
            },
            {
                "id": 9,
                "optionName": "Trial Membership",
                "price": 9.99,
                "features": [
                    "Access for 1 week",
                    "Use of gym facilities",
                    "Participation in all fitness classes",
                    "One personal trainer consultation",
                    "Access to gym orientation session"
                ]
            }
        ]




    return (
        <div>
            <h2 className="text-5xl">Bast Pricees in the town</h2>
            {
                priceOption.map((option) => <PriceOption key={option.id} option={option}> </PriceOption>)
            }
        </div>
    );
};

PriceOptions.propTypes = {

};

export default PriceOptions;