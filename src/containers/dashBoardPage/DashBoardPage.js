import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import green from '@material-ui/core/colors/green'
import "./DashBoardPage.css"
import axios from 'axios'
import Home from "../../services/images/home.png"

const styles = theme => ({
  card: {
    maxWidth: 2000,
    margin: 5,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  title: {
    color: 'black',
    fontSize: 25
  },
  avatar: {
    backgroundColor: green[500],
  },
})


class dashBoardPage extends React.Component {

  state = { expanded: false }

  componentDidMount = () => {
    const getLoggedInUser = sessionStorage.getItem("email")
    axios.get('http://localhost:8080/lagbevakning/company/email?email=' + getLoggedInUser).then(response => {
        sessionStorage.setItem("id", (response.data.id))
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div className="dashBoardWrapper">

      <div className="text">
      <h1>Juridiska företagsproblem blir historia</h1>
      <p>Nisi ut sit cillum voluptate reprehenderit ullamco officia duis ea sit. 
        Cupidatat irure cupidatat cillum quis voluptate velit Lorem. Duis eiusmod veniam ipsum culpa aliquip occaecat irure eu. 
        Cupidatat irure cupidatat cillum quis voluptate velit Lorem. Duis eiusmod veniam ipsum culpa aliquip occaecat irure eu. 
        Deserunt in ut fugiat aute et nulla laboris dolore tempor id sit ullamco. Sit cupidatat officia fugiat ut est nostrud duis tempor. 
        Duis proident enim dolor est aliquip anim sunt labore enim esse aute cillum culpa.</p>
      </div>

          <img className="image1" src={Home} alt="Eng" />

       
     {/*    <h1>Välkommen,  {sessionStorage.getItem("email")}</h1> */}
      <Card className="card1">
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> Paul </Avatar> }
            classes={{ title: classes.title }}
            title="Uppdatering gjord av lagbevakningen"
            subheader="Juni 14, 2019" />
            <CardContent>
                <Typography component="p">
                      Ullamco exercitation reprehenderit cupidatat deserunt nisi occaecat aute sint. Duis amet sint do esse voluptate est ut. Quis id elit est consectetur est aute dolore ipsum. Consequat esse officia et deserunt irure laboris esse. Veniam occaecat consectetur dolore pariatur nisi. Ullamco in tempor duis elit reprehenderit ex ut ad eiusmod duis ut.
                      Officia magna ad sint qui adipisicing amet exercitation nostrud ut ipsum fugiat. Incididunt eu adipisicing cupidatat id ex fugiat ex. Excepteur esse nostrud cupidatat commodo non. Laboris laboris nisi minim magna pariatur ullamco aliqua tempor veniam adipisicing minim veniam nisi excepteur. Consectetur irure quis reprehenderit ea incididunt et ea et. Dolor nulla officia ea esse elit aute incididunt aliquip qui sunt. Aute id irure ad nisi excepteur ut aliquip sunt veniam commodo.
                  </Typography>
            </CardContent>
      </Card>
      <Card className="card2">
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> RSM </Avatar> }
            classes={{ title: classes.title }}
            title="Prishöjning 2019"
            subheader="September 14, 2018" />
            <CardContent>
                <Typography component="p">
                      Ullamco exercitation reprehenderit cupidatat deserunt nisi occaecat aute sint. Duis amet sint do esse voluptate est ut. Quis id elit est consectetur est aute dolore ipsum. Consequat esse officia et deserunt irure laboris esse. Veniam occaecat consectetur dolore pariatur nisi. Ullamco in tempor duis elit reprehenderit ex ut ad eiusmod duis ut.
                  </Typography>
            </CardContent>
      </Card>

      
      <Card className="card3">
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> AS </Avatar> }
            classes={{ title: classes.title }}
            title="Ramboll förvärvar RSM&CO"
            subheader="September 14, 2017" />
            <CardContent>
                <Typography component="p">
                      Ullamco exercitation reprehenderit cupidatat deserunt nisi occaecat aute sint. Duis amet sint do esse voluptate est ut. Quis id elit est consectetur est aute dolore ipsum. Consequat esse officia et deserunt irure laboris esse. Veniam occaecat consectetur dolore pariatur nisi. Ullamco in tempor duis elit reprehenderit ex ut ad eiusmod duis ut.
                      Officia magna ad sint qui adipisicing amet exercitation nostrud ut ipsum fugiat. Incididunt eu adipisicing cupidatat id ex fugiat ex. Excepteur esse nostrud cupidatat commodo non. Laboris laboris nisi minim magna pariatur ullamco aliqua tempor veniam adipisicing minim veniam nisi excepteur. Consectetur irure quis reprehenderit ea incididunt et ea et. Dolor nulla officia ea esse elit aute incididunt aliquip qui sunt. Aute id irure ad nisi excepteur ut aliquip sunt veniam commodo.
                  </Typography>
            </CardContent>
      </Card>
     
     

      </div>
    )
  }
}


dashBoardPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(dashBoardPage)