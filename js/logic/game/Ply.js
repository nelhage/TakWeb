/**
 * A single action by a player. Usually one of two plies in a move.
 * There are special plies depending on the play mode.
 */
function Ply (protocol, plyNotation)
{
  switch (protocol)
  {
    case 'original':
      if (/^([MP]|Over)\s/.exec(plyNotation).toString())
      {

      }
      else
      {
        console.error('Protocol did not match expected type.');
      }
    break;
    case 'tak_v2':

    break;
    default:
      console.error('Server protocol not known.');
      return;
  }
}

// Parse a TPS style ply notation.
Ply.prototype.parseTPSPlyNotation = function (plyNotation)
{
  // dissect plyNotation.
  var regex = '^([MP]|Over)\\s'
}