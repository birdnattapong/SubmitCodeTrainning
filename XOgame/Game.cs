using System;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;

namespace XOgame
{
    class Game
    {
        private const int dimention = 3;
        private int turnStart = 1;
        private bool haveWinner = false;

        String[,] board = new String[dimention, dimention] { {"1","2","3"},
                                             {"4","5","6"},
                                             {"7","8","9"}};
        Player[] player = new Player[2];
        
        public Game(Player player1, Player player2)
        {
            this.player[0] = player1;
            this.player[1] = player2;
        }
        public void displayBoard()
        {
            Console.Clear();
            Console.WriteLine("Player1 = '{0}' mark = '{1}'", player[0].PlayerName, player[0].Mark);
            Console.WriteLine("Player2 = '{0}' mark = '{1}'", player[1].PlayerName, player[1].Mark);
            Console.WriteLine();

            Console.WriteLine("\t     |     |      ");
            Console.WriteLine("\t  {0}  |  {1}  |  {2}", board[0, 0], board[0, 1], board[0, 2]);
            Console.WriteLine("\t_____|_____|_____ ");
            Console.WriteLine("\t     |     |      ");
            Console.WriteLine("\t  {0}  |  {1}  |  {2}", board[1, 0], board[1, 1], board[1, 2]);
            Console.WriteLine("\t_____|_____|_____ ");
            Console.WriteLine("\t     |     |      ");
            Console.WriteLine("\t  {0}  |  {1}  |  {2}", board[2, 0], board[2, 1], board[2, 2]);
            Console.WriteLine("\t     |     |      ");

            Console.WriteLine();
        }

        public void playGame()
        {
            while(haveWinner == false)
            {
                displayBoard();
                Player winner = checkWinner();
                
                if(winner == null)
                {
                    if ((turnStart % 2) == 1)
                    {
                        Console.WriteLine("turn : {0} => player : {1}", this.turnStart, player[0].PlayerName);
                        requestAns(player[0]);
                        turnStart++;
                    }
                    else if ((turnStart % 2) == 0)
                    {
                        Console.WriteLine("turn : {0} => player : {1}", this.turnStart, player[1].PlayerName);
                        requestAns(player[1]);
                        turnStart++;
                    }
                }
                else
                {
                    Console.WriteLine();
                    Console.WriteLine("Game over !!! \nThe winner is {0}", winner.PlayerName);
                }
                
            }
        }

        public void requestAns(Player player)
        {
            bool checkedAnsCanUse, checkedAnsNotRepeat;
            do
            {
                Console.Write("Enter your choice : ");
                String ans = Console.ReadLine();
                checkedAnsCanUse = checkAnsCanUse(ans);
                checkedAnsNotRepeat = checkAnsNotRepeat(ans);

                if (checkedAnsCanUse == true && checkedAnsNotRepeat == true)
                {
                    if (ans == "1")
                    {
                        this.board[0, 0] = player.Mark;
                    }
                    else if (ans == "2")
                    {
                        this.board[0, 1] = player.Mark;
                    }
                    else if (ans == "3")
                    {
                        this.board[0, 2] = player.Mark;
                    }
                    else if (ans == "4")
                    {
                        this.board[1, 0] = player.Mark;
                    }
                    else if (ans == "5")
                    {
                        this.board[1, 1] = player.Mark;
                    }
                    else if (ans == "6")
                    {
                        this.board[1, 2] = player.Mark;
                    }
                    else if (ans == "7")
                    {
                        this.board[2, 0] = player.Mark;
                    }
                    else if (ans == "8")
                    {
                        this.board[2, 1] = player.Mark;
                    }
                    else if (ans == "9")
                    {
                        this.board[2, 2] = player.Mark;
                    }
                }
                else if(checkedAnsCanUse == false)
                {
                    Console.WriteLine("Error : Please enter number between 1-9 !");
                }
                else if(checkedAnsNotRepeat == false)
                {
                    Console.WriteLine("Error : You cannot select the number that already used ! Please try again");
                }
            } while (checkedAnsCanUse == false || checkedAnsNotRepeat == false);
        }

        public bool checkAnsCanUse(String ans)
        {
            if (ans == "1" || ans == "2" || ans == "3" || ans == "4" || ans == "5" || ans == "6" || ans == "7" || ans == "8" || ans == "9")
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool checkAnsNotRepeat(String ans)
        {
            if (ans == "1")
            {
                if(this.board[0, 0] == "X" || this.board[0, 0] == "O")
                {
                    return false;
                }
            }
            else if (ans == "2")
            {
                if (this.board[0, 1] == "X" || this.board[0, 1] == "O")
                {
                    return false;
                }
            }
            else if (ans == "3")
            {
                if (this.board[0, 2] == "X" || this.board[0, 2] == "O")
                {
                    return false;
                }
            }
            else if (ans == "4")
            {
                if (this.board[1, 0] == "X" || this.board[1, 0] == "O")
                {
                    return false;
                }
            }
            else if (ans == "5")
            {
                if (this.board[1, 1] == "X" || this.board[1, 1] == "O")
                {
                    return false;
                }
            }
            else if (ans == "6")
            {
                if (this.board[1, 2] == "X" || this.board[1, 2] == "O")
                {
                    return false;
                }
            }
            else if (ans == "7")
            {
                if (this.board[2, 0] == "X" || this.board[2, 0] == "O")
                {
                    return false;
                }
            }
            else if (ans == "8")
            {
                if (this.board[2, 1] == "X" || this.board[2, 1] == "O")
                {
                    return false;
                }
            }
            else if (ans == "9")
            {
                if (this.board[2, 2] == "X" || this.board[2, 2] == "O")
                {
                    return false;
                }
            }
            return true;
        }

        public Player checkWinner()
        {
            for (int i=0; i<3; i++)
            {
                if (this.board[i, 0] == this.board[i, 1] && this.board[i, 0] == this.board[i, 2])
                {
                    String res = this.board[i, 0];
                    if (res.Equals(player[0].Mark))
                    {
                        haveWinner = true;
                        return player[0];
                    }
                    else if (res.Equals(player[1].Mark))
                    {
                        haveWinner = true;
                        return player[1];
                    }
                }
            }

            for (int i=0; i<3; i++)
            {
                if (this.board[0, i] == this.board[1, i] && this.board[0, i] == this.board[2, i])
                {
                    String res = this.board[0, i];
                    if (res.Equals(player[0].Mark))
                    {
                        haveWinner = true;
                        return player[0];
                    }
                    else if (res.Equals(player[1].Mark))
                    {
                        haveWinner = true;
                        return player[1];
                    }
                }
            }

            if (this.board[1, 1] == this.board[0, 0] && this.board[1, 1] == this.board[2, 2])
            {
                String res = this.board[0, 0];
                if (res.Equals(player[0].Mark))
                {
                    haveWinner = true;
                    return player[0];
                }
                else if (res.Equals(player[1].Mark))
                {
                    haveWinner = true;
                    return player[1];
                }
            }

            if (this.board[1, 1] == this.board[0, 2] && this.board[1, 1] == this.board[2, 0])
            {
                String res = this.board[1, 1];
                if (res.Equals(player[0].Mark))
                {
                    haveWinner = true;
                    return player[0];
                }
                else if (res.Equals(player[1].Mark))
                {
                    haveWinner = true;
                    return player[1];
                }
            }

            return null;
        }
    }
}
