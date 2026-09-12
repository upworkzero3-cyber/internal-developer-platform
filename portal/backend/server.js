const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/create-service', (req, res) => {
  const { serviceName, description } = req.body;
  
  // Generate Kubernetes manifest
  const manifest = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
      name: serviceName,
      namespace: 'default'
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: serviceName
        }
      },
      template: {
        metadata: {
          labels: {
            app: serviceName
          }
        },
        spec: {
          containers: [
            {
              name: serviceName,
              image: `nginx:latest`,
              ports: [
                {
                  containerPort: 80
                }
              ]
            }
          ]
        }
      }
    }
  };

  res.json({
    success: true,
    message: `Service ${serviceName} created`,
    manifest: manifest
  });
});

app.listen(5000, () => {
  console.log('Portal backend running on :5000');
});