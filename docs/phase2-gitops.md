# Phase 2: GitOps

## Overview
Install and configure Argo CD for declarative deployments from Git.

## Objectives
- Install Argo CD on cluster
- Connect GitHub repo to cluster
- Automate deployments on Git push
- Multi-environment support

## Status
✅ Complete

## What We Did
- Installed Argo CD on Kubernetes
- Created platform-apps Application resource
- Configured auto-sync from GitHub repo (k8s-manifests/apps)
- Moved nginx app to GitOps management
- Verified automatic deployment works

## How It Works
- Push changes to GitHub → Argo CD detects → Auto-deploys to cluster
- Single source of truth: GitHub repo

## Next Steps
- Install Argo CD
- Configure repository access
- Set up application manifests