## Say goodbye to dependency hell!

Install **`occultist`** with:

```bash
sudo curl -o /usr/local/bin/occultist -L https://git.io/Jfv1u && \
sudo chmod +x /usr/local/bin/occultist
```

&nbsp;

**Install** a spell:

```bash
occultist install math
```

Install a **specific version** of the spell:

```bash
occultist install math 1.0.1
```

Install a spell with **semantic versioning**:

```bash
occultist install math 1.x.x
```

Install a **specific branch** of the spell:

```bash
occultist install math master
```

&nbsp;

Install [**the Chaos language**](https://chaos-lang.org/):

```bash
sudo occultist install chaos
```

&nbsp;

**Upgrade** a spell:

```bash
occultist upgrade math
```

**Remove** a spell:

```bash
occultist remove math
```

&nbsp;

**Initialize** a new spell repository:

```bash
occultist init
```

**Edit** the spell repository:

```bash
occultist edit
```

**Register** a new spell:

```bash
occultist register
```
