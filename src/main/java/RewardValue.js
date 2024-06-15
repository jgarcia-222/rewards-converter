class RewardValue
{
    constructor(cashValue)
    { this.cash = cashValue; }

    constructor(milesValue)
    { this.miles = milesValue; }

    getCashValue() {
        return (this.miles * 0.0035);
    }

    getMilesValue() {
        return (this.cash / 0.0035 );
    }

}