import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public balance!: number;
  public accumulatedCoins!: number;
  public lastClaimedAt!: Date | null;
  public miningStartTime!: Date;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    accumulatedCoins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    lastClaimedAt: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
    miningStartTime: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
