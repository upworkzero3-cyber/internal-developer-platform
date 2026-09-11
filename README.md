# Internal Developer Platform (IDP)

A production-grade Kubernetes-based platform enabling self-service infrastructure for developers.

## 🎯 What This Does

- **Self-Service Dev Portal**: One-click microservice creation (scaffolds repo, sets up CI/CD, deploys)
- **GitOps Pipeline**: Argo CD keeps cluster state in sync with Git
- **Observability**: Prometheus + Grafana dashboards + log aggregation
- **Security & Cost**: RBAC, network policies, cost monitoring
- **Infrastructure-as-Code**: Terraform + Helm for reproducible deployments

## 🚀 Quick Start

Coming soon after Phase 1 setup.

## 📚 Documentation

- [Phase 1: Kubernetes Setup](./docs/phase1-k8s-setup.md)
- [Phase 2: GitOps](./docs/phase2-gitops.md)
- [Phase 3: Observability](./docs/phase3-observability.md)
- [Phase 4: Self-Service Portal](./docs/phase4-selfservice-portal.md)

## 🏗️ Built With

- **Kubernetes** (Docker Desktop)
- **Argo CD** (GitOps)
- **Prometheus + Grafana** (Observability)
- **Terraform + Helm** (Infrastructure-as-Code)
- **React** (Developer Portal)
- **GitHub Actions** (CI/CD)

## ✨ Key Features

- Multi-namespace isolation (dev/staging/prod)
- Automated deployments via Git push
- Real-time metrics and logs
- Template-based service scaffolding
- Cost monitoring and resource governance

## 📝 License

MIT