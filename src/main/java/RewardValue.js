public class RewardValue
{
    double cash=0;
    int miles=0;
    public RewardValue(double cashValue)
    {
        this.cash = cashValue;
        this.miles = (int) (cashValue/0.0035);
    }

    public RewardValue(int milesValue)
    {
        this.cash = milesValue*0.0035;
        this.miles = (int) milesValue;
    }

    public double getCashValue() {
        return cash;
    }

    public int getMilesValue() {
        return miles;
    }

}