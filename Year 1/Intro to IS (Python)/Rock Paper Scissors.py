import random ## The random module is imported

var = ["Rock", "Paper", "Scissors"] ## var is defined as a list containing "Rock", "Paper" and "Scissors"

## All the variables are defined as a string or integer
userAns = ""
userWin = ""
userScore = 0
comScore = 0
gameMode = 0
gameCount = 0

print("Hello user, I am the Random Possibility System, a.k.a. 'Rock, Paper, Scissors', or RPS for short.\nPlease choose the game mode that you would like to play:\n1. Best-of-3\n2. Best-of-5")

## This allows the user to select if they want to play a best out of 3 or best out of 5 game
gameMode = int(input("")) ## User selects which game mode they want to play
if gameMode == 1: ## If the user selected the best-of-3 game mode, execute the indented code below
  gameCount = 3 
  minWin2o3 = 2 ## Minimum win count to instantly win the game without having to play all 3 rounds i.e. 2-0 score is an instant win.
elif gameMode == 2: ## If the user selects the best-of-5 game mode, execute the indented code below
  gameCount = 5
  minWin3o5 = 3 ## Minimum win count to instantly win the game without having to play all 5 rounds i.e. 3-0 or 3-1 score is an instant win.

print("Please key in 'Rock', 'Paper' or 'Scissors' as your choice.")

while gameCount > 0: ## While this condition is true, loop the indented code below until it is false.
  
  userAns = input("\nUser:   ") ## User inputs their choice
  comAns = random.choice(var) ## The computer randomly selects an item from the list 'var'

## All the possible combinations of wins, losses or ties are stated below
  if userAns.lower() == comAns.lower():
    userWin = "tie"
  elif userAns.lower() == "rock" and comAns == "Scissors":
    userWin = "win"
  elif userAns.lower() == "rock" and comAns == "Paper":
    userWin = "lose"
  elif userAns.lower() == "scissors" and comAns == "Paper":
   userWin = "win"
  elif userAns.lower() == "scissors" and comAns == "Rock":
    userWin = "lose"
  elif userAns.lower() ==  "paper" and comAns == "Rock":
    userWin = "win"
  elif userAns.lower() == "paper" and comAns == "Scissors":
    userWin = "lose"

  if userWin == "win": ## If the user won the round, execute the indented code below
    result = "You win this round!"
    userScore += 1 ## Score tracker for the user
  elif userWin == "tie": ## If the user tied the round, execute the indented code below
    result = "You tied this round!"
  elif userWin == "lose": ## If the user lost the round, execute the indented code below
    result = "You lose this round."
    comScore += 1 ## Score tracker for the computer

  if userWin != "tie": ## If the user doesn't get a tie, execute the indented code below. This if statement ensures that the game won't end after 5 rounds even if all the rounds were ties.
    gameCount -= 1 ## gameCount has 1 subtracted from its value at the end of each round to signify a round is completed and prevents an endless while loop.

  if gameMode == 1: ## If the game mode is best-of-3, execute the indented code below
    if (userScore == minWin2o3) or (comScore == minWin2o3): ## If the user's or computer's score is equal to 2, execute the indented code below
      gameCount = 0 ## gameCount is immediately set to 0, which ends the while loop
  elif gameMode == 2: ## If the game mode is bet-of-5, execute the indented code below
    if (userScore == minWin3o5) or (comScore == minWin3o5): ## If the user's or computer's score is equal to 3, execute the indented code below
      gameCount = 0

  print("RPS:   ",comAns) ## The computer's random choice is printed out for the user to see
  print(result) ## The user is told if they won, lost or tied the round

  print("\nScores!\nUser:  ", userScore, "\nRPS:   ", comScore) ## The scores for the user and the computer are printed

## The final results of the game is printed
if gameCount == 0: ## If gameCount is equal to 0, execute the indented code below
  if userScore == comScore: ## If the user and the computer has the same score, execute the indented code below
    print("\nYou tied this game!")
  elif userScore > comScore: ## If the user's score is higher than the computer's score, execute the indented code below
    print("\nCongratulations! You won the game!")
  else: ## If neither of the previous if statements' conditions are met, i.e. if the user's score is lower than the computer's one, execute the indented code below
    print("\nAww, you lost this time...")

## The scores are reset at the end of each game
  comScore = 0
  userScore = 0