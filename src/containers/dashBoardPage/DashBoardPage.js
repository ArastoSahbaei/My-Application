import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import "./DashBoardPage.css"

const styles = theme => ({
  card: {
    maxWidth: 1000,
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
    backgroundColor: red[500],
  },
})

class dashBoardPage extends React.Component {
  state = { expanded: false }

  render() {
    const { classes } = this.props

    return (
      <div>
      <Card className={classes.card}>
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> Paul </Avatar> }
            classes={{ title: classes.title }}
            title="Uppdatering gjord av lagbevakningen"
            subheader="Juni 14, 2019" />
    {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" /> */}
            <CardContent>
                <Typography component="p">
                      Ullamco exercitation reprehenderit cupidatat deserunt nisi occaecat aute sint. Duis amet sint do esse voluptate est ut. Quis id elit est consectetur est aute dolore ipsum. Consequat esse officia et deserunt irure laboris esse. Veniam occaecat consectetur dolore pariatur nisi. Ullamco in tempor duis elit reprehenderit ex ut ad eiusmod duis ut.
                      Officia magna ad sint qui adipisicing amet exercitation nostrud ut ipsum fugiat. Incididunt eu adipisicing cupidatat id ex fugiat ex. Excepteur esse nostrud cupidatat commodo non. Laboris laboris nisi minim magna pariatur ullamco aliqua tempor veniam adipisicing minim veniam nisi excepteur. Consectetur irure quis reprehenderit ea incididunt et ea et. Dolor nulla officia ea esse elit aute incididunt aliquip qui sunt. Aute id irure ad nisi excepteur ut aliquip sunt veniam commodo.
                  </Typography>
            </CardContent>
      </Card>

      <Card className={classes.card}>
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> Paul </Avatar> }
            classes={{ title: classes.title }}
            title="Uppdatering gjord av lagbevakningen"
            subheader="September 14, 2016" />
    {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" /> */}
            <CardContent>
                <Typography component="p">
                      Ullamco exercitation reprehenderit cupidatat deserunt nisi occaecat aute sint. Duis amet sint do esse voluptate est ut. Quis id elit est consectetur est aute dolore ipsum. Consequat esse officia et deserunt irure laboris esse. Veniam occaecat consectetur dolore pariatur nisi. Ullamco in tempor duis elit reprehenderit ex ut ad eiusmod duis ut.
                      Officia magna ad sint qui adipisicing amet exercitation nostrud ut ipsum fugiat. Incididunt eu adipisicing cupidatat id ex fugiat ex. Excepteur esse nostrud cupidatat commodo non. Laboris laboris nisi minim magna pariatur ullamco aliqua tempor veniam adipisicing minim veniam nisi excepteur. Consectetur irure quis reprehenderit ea incididunt et ea et. Dolor nulla officia ea esse elit aute incididunt aliquip qui sunt. Aute id irure ad nisi excepteur ut aliquip sunt veniam commodo.
                  </Typography>
            </CardContent>
      </Card>
      <Card className={classes.card}>
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> Paul </Avatar> }
            classes={{ title: classes.title }}
            title="Uppdatering gjord av lagbevakningen"
            subheader="September 14, 2016" />
    {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" /> */}
            <CardContent>
                <Typography component="p">
                      Ullamco exercitation reprehenderit cupidatat deserunt nisi occaecat aute sint. Duis amet sint do esse voluptate est ut. Quis id elit est consectetur est aute dolore ipsum. Consequat esse officia et deserunt irure laboris esse. Veniam occaecat consectetur dolore pariatur nisi. Ullamco in tempor duis elit reprehenderit ex ut ad eiusmod duis ut.
                      Officia magna ad sint qui adipisicing amet exercitation nostrud ut ipsum fugiat. Incididunt eu adipisicing cupidatat id ex fugiat ex. Excepteur esse nostrud cupidatat commodo non. Laboris laboris nisi minim magna pariatur ullamco aliqua tempor veniam adipisicing minim veniam nisi excepteur. Consectetur irure quis reprehenderit ea incididunt et ea et. Dolor nulla officia ea esse elit aute incididunt aliquip qui sunt. Aute id irure ad nisi excepteur ut aliquip sunt veniam commodo.
                  </Typography>
            </CardContent>
      </Card>
      <Card className={classes.card}>
          <CardHeader avatar={ <Avatar aria-label="Recipe" className={classes.avatar}> Paul </Avatar> }
            classes={{ title: classes.title }}
            title="Uppdatering gjord av lagbevakningen"
            subheader="September 14, 2016" />
    {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" /> */}
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