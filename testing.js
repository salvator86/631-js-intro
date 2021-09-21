//Task-1-1
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals; // code goes here
  }

//Sample Tests:
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(goals(0,0,0), 0)
  Test.assertEquals(goals(43, 10, 5), 58)
    });
  });

//Task-1-2
function move (position, roll) {
    return position + roll*2;// return the new position
  }
//Sample Tests:
describe('move function', () => {
    it('basic tests', () => {
      Test.assertEquals(move(0, 4), 8);
      Test.assertEquals(move(3, 6), 15);
      Test.assertEquals(move(2, 5), 12);
    })
  })
//Task-1-3
