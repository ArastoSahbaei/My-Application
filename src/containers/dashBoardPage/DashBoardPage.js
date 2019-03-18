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
      <div>
        <h1>Välkommen,  {sessionStorage.getItem("email")}</h1>
      <Card className={classes.card}>
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

      <Card className={classes.card}>
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

      
      <Card className={classes.card}>
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

      <Card className={classes.card}>
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> JK </Avatar> }
            classes={{ title: classes.title }}
            title="Kundenkät"
            subheader="Januari 14, 2018" />
    {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" /> */}
            <CardContent>
                <Typography component="p">
                    Eiusmod pariatur elit proident consequat consequat consectetur. Est Lorem excepteur eiusmod ut sunt incididunt qui fugiat pariatur do dolor. Fugiat ex cupidatat aliqua qui Lorem pariatur velit cupidatat aute elit deserunt fugiat Lorem. Aliquip minim ipsum cillum et ullamco fugiat eu voluptate cillum ad nulla in irure eu. Id labore non et eiusmod mollit tempor elit exercitation. Aliquip dolor laborum Lorem duis nulla velit ad labore do veniam.
                    Adipisicing incididunt deserunt minim eiusmod commodo magna officia consequat duis non aute incididunt. <br />Lorem anim incididunt laboris enim nostrud ipsum adipisicing. Nulla reprehenderit enim ea non sunt proident. Laboris esse et ullamco nisi velit sit ut duis tempor amet occaecat cillum sit.
           <br />   Deserunt quis ipsum incididunt magna cupidatat ipsum ea anim. Enim eiusmod nisi sunt et eiusmod elit ut. Amet proident culpa sit ad.
                    Nostrud culpa sit culpa est deserunt. Sit aliqua Lorem ad sint. Ipsum esse laboris magna do velit ullamco. Velit magna et Lorem esse ullamco nostrud enim qui in sunt magna nostrud. Consectetur proident quis ea enim veniam amet et. Enim aliquip fugiat non eu deserunt cupidatat eu in labore nostrud cupidatat. Et incididunt magna ipsum tempor consectetur sunt culpa do ad.
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